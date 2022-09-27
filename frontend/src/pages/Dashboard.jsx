
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if(user) console.log(user.user);
  return (

    <div>{user ? user.user.name : 'guest'}, wellcome to FrMemo.</div>
  )
}

export default Dashboard