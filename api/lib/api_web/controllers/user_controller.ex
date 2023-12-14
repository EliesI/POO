defmodule ApiWeb.UserController do
  use ApiWeb, :controller

  alias Api.Accounts
  alias Api.Accounts.User

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    query_params = conn.query_params
    email = Map.get(query_params, "email")
    username = Map.get(query_params, "username")
    users =
      if is_nil(email) and is_nil(username) do
        Accounts.list_users()
      else
        Accounts.list_users(%{email: email, username: username})
      end

    if Enum.empty?(users) do
      conn
      |> put_status(401)
      |> json(%{error: "Aucun utilisateur trouvé"})
    else
      render(conn, "index.json", users: users)
    end
  end




  def create(conn, %{"user" => user_params}) do
    role = Map.get(user_params, "role", "user")
    user_params = Map.put_new(user_params, "role", role)

    with {:ok, %User{} = user} <- Accounts.create_user(user_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.user_path(conn, :show, user))
      |> render("show.json", user: user)
    end
  end


  def show(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{}} <- Accounts.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
