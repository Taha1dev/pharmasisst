import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
const ModeratorHome = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/');
  //   }
  // }, []);
  return (
    <div>
      <BreadCrumb back={'/Moderator'} />
      <h1 className="text-2xl">Welcome to the moderator dashboard</h1>
      <br />
    </div>
  );
};

export default ModeratorHome;
