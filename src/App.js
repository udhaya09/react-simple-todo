import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Wakeup at 4:30</td>
                <td>Udhaya</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Excercise till 5:30</td>
                <td>Udhaya</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Walking till 7:00</td>
                <td>Udhaya</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
