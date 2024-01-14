import React, { useContext, useState } from 'react'
import './Orders.scss'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'
const dataArr = []

function Orders() {

  const [activ, setActiv] = useState(0)
  const { order, setOrder } = useContext(Context)
  const delOrder = (evn) => {
    setOrder(order.filter((e) => e.id != evn))
  }
  return (
    <div className='Orders'>
      <div className="order__top">
        <h2>Orders #34562</h2>
        <div className="orders__btns">
          <button className={activ == 1 ? 'button actev' : 'button'} onClick={(e) => setActiv(e.target.id)} id='0'>
            <Link id='1 '>Dine In</Link>
          </button>
          <button className={activ == 2 ? 'button actev' : 'button'} onClick={(e) => setActiv(e.target.id)} id='1'>
            <Link id='2'>To Go</Link>
          </button>
          <button className={activ == 3 ? 'button actev' : 'button'} onClick={(e) => setActiv(e.target.id)} id='2'>
            <Link id='3'>Delivery</Link>
          </button>
        </div>
        <div className="df">
          <li className='item'><h4>Item</h4></li>
          <ul className='qty'>
            <li><h4>Qty</h4></li>
            <li><h4>Price</h4></li>
          </ul>
        </div>
      </div>

      <ul className='order__list'>
        {
          order?.map((e, i) => (
            <li key={i} className='order__item'>
              <div className='item__left'>
                <div>
                  <img src={e.img} alt="" />
                  <span>
                    <p>
                      {e.title}
                    </p>
                    <b>
                      ${e.price}
                    </b>
                  </span>
                  <p className='order__num'>{e.number}</p>
                </div>
                <input type="text" placeholder='Please, just a little bit spicy only.' />
              </div>
              <div className='item__right'>
                <span>$ {e.number * Math.ceil(e.price)}</span>
                <button onClick={() => delOrder(e.id)}><i className="bi bi-trash"></i></button>
              </div>
            </li>
          ))
        }
      </ul>
      <div className="payment">
        <ul >
          <li > <h5>Sub total</h5></li>
          <li > $2 </li>
        </ul>
        <button>Continue to Payment</button>
      </div>
    </div >
  )
}

export default Orders