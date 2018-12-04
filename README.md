# model-converter-ts
A Node.js module that converter models
## Installation 
```sh
npm install model-converter-ts
```
## Implementation
```typescript
import {ModelConverter} from 'model-converter-ts';
import {Person, PersonDTO} from './models';

class PersonModelConverter extends ModelConverter<Person, PersonDTO, Context> {
  
    public update(dto: PersonDTO, person: Person, context?: Context):void {
        
      dto.age: parseInt(person.age, 10);
      dto.dob: new Date(person.dobAsLong);
      dto.email: person.email;
      dto.married: person.status === 'married';
      dto.name: person.firstName + ' ' +person.lastName;
      dto.parent: context.parent;
      
    }
}
```

## Usage
```typescript
import PersonModelConverter from './PersonModelConverter';
import PersonService from './PersonService';
import {Person, PersonDTO} from './models';

const converter = new PersonModelConverter();
const service = new PersonService();

// Convert Entity to DTO
const dto = converter.connvert(service.findPersonById(1));

// Convert Array of Entities to DTOs
const dtos = converter.connvertList(service.findAllPersons());

// Update dto from entity
const personDTO = new PersonDTO();
converter.update(personDTO, service.findPersonById(1))
```

## License
MIT (unless noted otherwise)