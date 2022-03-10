import "./style.css";
import "antd/dist/antd.css";
import {Pagination, Row} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Fact} from "../Fact";
import {Filter} from "../Filter";
import {changePage} from "../../Redux/listFacts";
import {getAllFacts} from "../../Services/factService";
import {filter} from "../../Logic/filter";

function App() {
  const {listFacts, listFilteredFacts, filterFacts, month, animals, page} = useSelector(state => state.facts);
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(getAllFacts())
  }, [])

  useEffect(() => {
    dispatch(filter(listFacts, filterFacts, month, animals, page))
  }, [filterFacts, month, animals, page]);

  return (
    <div className="App">
      <header>
        <h1>Cats Fact</h1>
        <Filter/>
      </header>
      <Row gutter={{xs: 8, sm: 16, md: 24}} justify="center">
        {listFilteredFacts.map(elem => {
          return <Fact key={elem._id} fact={elem}/>
        })}
      </Row>
      <Pagination current={page} showTotal={() => `Total ${listFilteredFacts.length} facts`}
                  total={listFilteredFacts.length} pageSize={10}
                  onChange={(page) => dispatch(changePage(page))}
      />
    </div>
  );
}

export default App;