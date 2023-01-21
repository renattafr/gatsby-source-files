import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import WineCard from '../../components/WineCard';
import { useLocalStorage } from 'react-use';

const dummyPrice = 59

function WinePage() {

    let [wineTitles, setWineTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('reds')
    let [cart, setCart] = useLocalStorage('cart', [])

    function addToCard(wine) {
        // console.debug(coffee)
        cart.push(wine)
        console.table(cart)
        setCart([...cart])
    }

    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/wines/${subMenu}`)
            .then(res => res.json())
            .then((wines) => {
                for (let i = 0; i < wines.length; i++) {
                    // console.log(coffees[i].title)
                    items.push(
                        <WineCard
                            key={i}
                            image={wines[i].image}
                            title={wines[i].wine}
                            description={wines[i].winery}
                            price={dummyPrice}
                            handleClick={() => { addToCard(wines[i]) }}
                        />
                    )
                }
                setWineTitles(items)
                localStorage.clear()
                
            })
    }, [subMenu])
    
    return <Container style={{padding:'15px'}}>
        
        <h1>POS</h1>
        <ButtonGroup style={{padding:'15px'}} aria-label="Basic example">
            <Button variant="danger" onClick={() => { setSubMenu('reds')}}>Reds</Button>
            <Button variant="warning" onClick={() => { setSubMenu('sparkling')}}>Sparkling</Button>
            </ButtonGroup>
            <Row>
            <Col>
                <Row>
                    {wineTitles}
                </Row>
            </Col>
            <Col sm={3}>
                <h2>Cart </h2>
                <table class="table table-bordered table-striped">
                    <thead class="bg-gray">
                        <tr style={{textAlign: 'center', background: '#C2D3E3'}}>
                            <td style={{border: '1px solid #9FA6AC'}}>Wine Name</td>
                            <td style={{border: '1px solid #9FA6AC'}}>Price</td>
                        </tr>
                    </thead>
                    <tbody style={{border: '1px solid'}}>
                        {cart.map((item, i) => {
                            return <tr>
                                <td style={{border: '1px solid #9FA6AC'}}>{item.wine}</td>
                                <td style={{border: '1px solid #9FA6AC'}}>{dummyPrice}</td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr class = "fw-bold" style={{border: '1px solid #9FA6AC'}}>
                            <td style={{border: '1px solid #9FA6AC'}}>
                            Total
                            </td>
                            <td style={{border: '1px solid #9FA6AC'}}>
                            ฿{cart.length * dummyPrice}
                            </td>
                        </tr>
                    </tfoot>
                </table>
                </Col>
        </Row>
        </Container>
        }
export default WinePage