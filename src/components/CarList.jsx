import Car from "./Car";

const CarList = () => {
    return (
        <div>
            <Car brand={"Toyota"} model={"Corolla"} year={2020}/>
            <Car brand={"Fort"} model={"Mustang"} year={2019}/>
            <Car brand={"Škoda"} model={"Fabira"} year={2018}/>
        </div>
    );
};

  export default CarList;