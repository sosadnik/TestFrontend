import Input from "./Input/Input";
import axios from "axios";

function Form() {
  const submit = async (person) => {
    console.log("person: ", person);
    try {
      const res = await axios.post("http://localhost:8080/base/person", {
        age: person.age,
        name: person.name,
      });
      console.log(res);
      return true;
    } catch (e) {
      console.log(e.response);
      return false;
    }
  };

  return (
    <div>
      <Input onSubmit={(person) => submit(person)} />
    </div>
  );
}

export default Form;
