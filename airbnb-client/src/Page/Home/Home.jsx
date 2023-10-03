import Categories from "../../Component/Categories/Categories";
import Room from "../../Component/Room/Room";
import Container from "../../Shard/Container/Container";

const Home = () => {
  return (
    <>
    <Container>
        <Categories/>
        <Room></Room>
    </Container>
    </>
  );
};

export default Home;
