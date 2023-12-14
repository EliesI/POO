# web/router.ex

defmodule ApiWeb.Router do
  use ApiWeb, :router
  use Pow.Phoenix.Router


  pipeline :api do
    plug :accepts, ["json"]
    plug Api.Auth.AuthFlow, otp_app: :api

  end

  pipeline :api_protected do
    plug Pow.Plug.RequireAuthenticated,
    error_handler: ApiWeb.AuthErrorHandler
  end

  scope "/api", ApiWeb.Controllers do
    pipe_through :api

    post "/register", UserRegistration, :register
    post "/login", UserLogin, :login
  end

  scope "/api", ApiWeb do
    pipe_through [:api, :api_protected]

    resources "/users", UserController, except: [:new, :edit]
    resources "/clocks/:userID", ClockController, only: [:create]
    get "/clocks/:userID", ClockController, :show
    get "/workingtimes/:userID", WorkingTimeController, :index
    get "/workingtimes/:userID/:id", WorkingTimeController, :show
    post "/workingtimes/:userID", WorkingTimeController, :create
    put "/workingtimes/:id", WorkingTimeController, :update
    delete "/workingtimes/:id", WorkingTimeController, :delete

    # Enables LiveDashboard only for development
    if Mix.env() in [:dev, :test] do
      import Phoenix.LiveDashboard.Router

      scope "/" do
        pipe_through [:fetch_session, :protect_from_forgery]
        live_dashboard "/dashboard", metrics: ApiWeb.Telemetry
      end
    end
  end
end
