const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  fullname: state => state.user.fullname,
  name: state => state.user.name,
  user_id: state => state.user.id
}
export default getters
