import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ComponentDetail from './ComponentDetail';
import CardsComments from './CardsComments';

const App = () => {

  return (
    <div className="ui container comments">
      <CardsComments>
        <ComponentDetail
          author={faker.name.firstName()}
          metadata={faker.date.weekday()}
          text={faker.lorem.words()}
          avatar={faker.image.avatar()}
        />
      </CardsComments>

      <CardsComments>
        <ComponentDetail
          author={faker.name.firstName()}
          metadata={faker.date.weekday()}
          text={faker.lorem.words()}
          avatar={faker.image.avatar()}
        />
      </CardsComments>

      <CardsComments>
        <ComponentDetail
          author={faker.name.firstName()}
          metadata={faker.date.weekday()}
          text={faker.lorem.words()}
          avatar={faker.image.avatar()}
        />
      </CardsComments>
    </div>
  );

};

ReactDOM.render(<App />, document.querySelector("#root"));