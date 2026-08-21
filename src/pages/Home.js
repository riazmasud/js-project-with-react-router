export function Home() {
    const address = {
        city: "Greenacres",
        state: "Florida",
        zipCode: "33463"
    }


    const showAddress = (parameter) => {
        for(let key in parameter) {
            console.log(key, parameter[key]);
        }
    }

    //Factory Function

    function createAddress(city, state, zipCode) {
        return {
            city: city,
            state: state,
            zipCode: zipCode
        };
    }

    let returnNewAddress = createAddress("Lakeworth", "Florida", "33461")
    console.log(returnNewAddress);

     //Constructor Function
     function Address1(city, state, zipCode) {
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }

    let returnNewAddress2 = createAddress("WPB", "Florida", "33469")
    console.log(returnNewAddress2);

    let one = new Address1("WPB", "Florida", "33469")
    let two = new Address1("WPB", "Florida", "33469")

    function areEqual(addr1, addr2) {
        return addr1.city === addr2.city 
            && addr1.state === addr2.state
            && addr1.zipCode === addr2.zipCode
    } 

    function areSame(addr1, addr2) {
        return addr1 === addr2;
    }

    console.log(areEqual(one, two));
    console.log(areSame(one, two));
    


    //Find duplicates in an array using javaScript
    const numbers = [1, 2, 3, 6, 9, 1, 5, 6];
    

    function findDuplicates(numberArray) {
        console.log("****find duplicates*****");
        const duplicates = [];
        for(let i=0; i<numberArray.length; i++) {
            //[1, 2, 3, 6, 9, 1, 5, 6]
            
            for(let j=0; j<numberArray.length; j++) {
                // prevents the element from comparing with itself
                if (i !== j) {
                    //[1, 2, 3, 6, 9, 1, 5, 6]
                    console.log("****")
                    // console.log("numberArray[i]  " + numberArray[i])
                    // console.log("numberArray[j]  " + numberArray[j])
                    console.log("****")
                    if(numberArray[j] === numberArray[i]) {
                        console.log("numberArray[j] === numberArray[i] " + numberArray[j] + " " + numberArray[i])
                        //console.log("numberArray[i]  push " + numberArray[i])
                        duplicates.push(numberArray[i]);
                        break;
                    }
                }

            }
            
            console.log(duplicates);
            return duplicates;
        }
        console.log("******")
    }

    findDuplicates(numbers)

   
    //Find duplicates in an array using javaScript
    
    const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElement = toFindDuplicates(arry);
console.log(duplicateElement);


    return (
        <>
            <h1>Home</h1>
            <button onClick={() => showAddress(address)}>Show Address</button>
            <br />
        </>
    )
}