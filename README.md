# model-converter-ts
A Node.js module that converter models
## Installation 
```sh
npm install model-converter-ts
```
## Usage
```typescript
import {ModelBuilder} from 'model-converter-ts';

interface Person {
  name: string;
  age: number;
  dob: Date;
  married: boolean;
  email?: string;
}

class PersonModelConverter extends ModelConverter<Person, PersonDTO, Context> {
  
    public convert(person:Person, context:Context): PersonDTO {
        
    return {
      age: parseInt(person.age, 10),
      dob: new Date(person.dobAsLong),
      email: person.email,
      married: person.status === 'married',
      name: person.firstName + ' ' +person.lastName,
      parent: context.parent
    } as PersonDTO;
    
  }
}
```

## License
MIT (unless noted otherwise)