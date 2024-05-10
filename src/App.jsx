import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.scss'
import AppNavbar from './components/AppNavbar'
import AppPlayer from './components/AppPlayer'
import { Container, Row } from 'react-bootstrap'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <AppNavbar />
          <TopBar />
        </Row>
        <AppPlayer />
      </Container>
    </div>
  )
}

export default App
