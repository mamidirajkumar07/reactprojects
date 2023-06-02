import ShowCalendar from "./components/props/Calendar";
import ExpenseItem from "./components/props/ExpenseItem";
import Twoproducts from "./components/props/Productprops";
import tick from "./components/Time";
import Eventshandlers from "./components/props/Eventhandlers";
// import ShowCalendar from "./components/props/Calendar";
// chilbro project
import Chillbroproject from "./components/Chillbro/Chillbro";
//state component
import ChangeTitle from "./components/UseStatefunc/UseStatefunc";
//submit form
// import ExpenseFormitems from "./components/UseStatefunc/ExpenseForm";
import SubmitFormButon from "./components/form/Newform";

function App() {
    const age = 24;
    const gender = "male";
    const sex = 'female';
    const title1 = 'product1';
    const price1 = '10';
    const desc1 = 'proucts1';
    const date = new Date();
    // const titlee = newtitle;
    
  return(
    <div>

        <ExpenseItem agee={age} gendere={gender} sex = {sex}/>
        <Twoproducts title={title1} price={price1} desc={desc1}/>
        {/* < Twoproducts title="product2" price="20" desc="products2"/>
        < Twoproducts title="product3" price="30" desc="products3"/> */}
        {/* <ChangeTitle />
        <Eventshandlers />
        <tick />
        {/* <Chillbroproject /> */}
        {/* <ShowCalendar /> */}
        {/* <ExpenseFormitems /> */}
        <SubmitFormButon />
    </div>
  );
}

export default App;