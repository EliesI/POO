defmodule Api.Auth.UserRegistration do
  defstruct [:email, :username, :password, :password_confirmation]

  @type t() :: %__MODULE__{}
end
