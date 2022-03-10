import {Select} from "antd";
import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {changeAnimals, changeFilter, changeMonth} from "../../Redux/listFacts";

export const Filter = () => {
  const {listFacts} = useSelector(state => state.facts);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
  const uniqTypes = [...new Set(listFacts.map((fact) => fact.type.charAt(0).toUpperCase() + fact.type.slice(1)))]
  const {Option} = Select;
  const dispatch = useDispatch()

  return (
    <div className="filter-container">
      <div className="primary-filter">
        <Select
          mode="multiple"
          allowClear
          style={{width: 310}}
          placeholder="Select filter"
          defaultValue={[]}
          onChange={filter => dispatch(changeFilter(filter))}
        >
          <Option key="source">source</Option>
          <Option key="verify">verify</Option>
        </Select>
      </div>
      <div className="second-filter">
        <Select placeholder="Select month" mode="multiple" style={{width: 150, marginRight: 10}}
                onChange={month => dispatch(changeMonth(month))}>
          {monthNames.map((month, index) => <Option key={index + 1}>{month}</Option>)}
        </Select>
        <Select placeholder="Select animal" mode="multiple" style={{width: 150}}
                onChange={animals => dispatch(changeAnimals(animals))}>
          {uniqTypes.map(type => <Option key={type.toLowerCase()}>{type}</Option>)}
        </Select>
      </div>
    </div>
  )
}