export function logout() {
    localStorage.clear();
}
export function jwtDecode(token) {
    const jwttoken = localStorage.getItem('token');
    const id = jwtDecode(jwttoken).user_id;
    console.log(jwtDecode(jwttoken));
    if (!jwttoken) {
      router.push('/login');
    }
};
