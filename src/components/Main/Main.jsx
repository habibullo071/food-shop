import React, { useContext, useState } from 'react'
import './Main.scss'
import { data } from '../../data/data'
import { Context } from '../../Context/Context'
const arrCategory = []

function Main() {
  const [searchData, setSearchData] = useState('')
  const { order, setOrder } = useContext(Context)
  data.forEach((e) => {
    if (!arrCategory.includes(e.type))
      arrCategory.push(e.type);
  })
  const [category, setCategory] = useState(arrCategory[0])
  const searchItem = (evn) => {
    const data2 = []
    data.map((item) => {
      if (item.title.toLowerCase().includes(evn.toLowerCase())) {
        data2.push(item)
      }
    })
    setSearchData(data2);
  }
  return (
    <div className='main '>
      <div className="main__header">
        <div className="header__inner">
          <div>
            <h1>
              Jaegar Resto
            </h1>
            <p>
              Tuesday, 2 Feb 2021
            </p>
          </div>
          <div>
          <div className="inp">
          <label htmlFor="serch"> <i className="bi bi-search"></i></label>
            <input onChange={(e) => searchItem(e.target.value)} id='search' type="text" placeholder='Search for food, coffe, etc..' />
          </div>
          </div>
        </div>
        <div className='category__list'>
          {
            arrCategory?.map((item, i) => (
              <button className={category == item ? 'btn__active' : ''} onClick={() => setCategory(item)} key={i}>{item}</button>
            ))
          }
        </div>
      </div>
      <ul className="main__list">
        {searchData.length > 0 ? searchData.map((item, i) => (
          <li onClick={() => { 
            setOrder([...new Set([...order, item])]);
            item.number = item.number ? item.number + 1 : 1;
          }} key={i} className='main__card'>
            <img src={item.img} alt="" />
            <h4>{item.title}</h4>
            <b>$ {item.price}</b>
            <span>{item.have}</span>
          </li>
        ))
          :
          data?.filter((e) => e.type == category).map((item, i) => (
            <li onClick={() => {
              setOrder([...new Set([...order, item])]);
              item.number = item.number ? item.number + 1 : 1;
            }} key={i} className='main__card'>
              <img src={item.img} alt="" />
              <h4>{item.title}</h4>
              <b>$ {item.price}</b>
              <span>{item.have}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Main