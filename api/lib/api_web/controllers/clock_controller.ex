defmodule ApiWeb.ClockController do
  use ApiWeb, :controller

  alias Api.Accounts
  alias Api.Accounts.Clock

  action_fallback ApiWeb.FallbackController

  def show(conn, %{"userID" => user_id}) when is_binary(user_id) do
    user_id = Ecto.UUID.cast(user_id)

    case user_id do
      {:ok, uuid} ->
        clocks = Accounts.list_user_clocks(uuid)
        render(conn, "index.json", clocks: clocks)

      :error ->
        conn
        |> put_status(400)
        |> json(%{error: "Invalid UUID format for user ID"})
    end
  end


  def create(conn, %{"userID" => user_id, "clock" => clock_params}) when is_binary(user_id) do
    last_clock = Accounts.get_last_user_clock(user_id)

    status = if last_clock && last_clock.status == false, do: true, else: false
    new_clock_params = Map.put(clock_params, "status", status)

    case Accounts.create_user_clock(user_id, new_clock_params) do
      {:ok, %Clock{} = clock} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", Routes.clock_path(conn, :show, clock))
        |> render("show.json", clock: clock)

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ApiWeb.ChangesetView, "error.json", changeset: changeset)
    end
  end


end
