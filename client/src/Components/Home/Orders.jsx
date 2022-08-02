import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderByName, orderByKG, filterByTemps, filterDogsBy, showTemperaments } from '../../Redux/Actions'

const Orders = ({sortByName, sortKG, sortByLocation, sortTemps, allTemps}) => {

  return (
    <div>
    <select defaultValue={"DEFAULT"} onChange={e => sortKG(e)}>
        <option value="DEFAULT" disabled>Order by KG:</option>
        <option value="kg+">Heaviest</option>
        <option value="kg-">Lightiest</option>
    </select>  
    <select defaultValue={"DEFAULT"} onChange={e => sortByName(e)}>
        <option value="DEFAULT" disabled>Order by name:</option>
        <option value="atoz">Ascendent</option>
        <option value="ztoa">Descendent</option>
    </select>  
    <select defaultValue={"DEFAULT"} onChange={e => sortByLocation(e)}>
        <option value="DEFAULT" disabled>Choose dogs by:</option>
        <option value="DB">DataBase</option>
        <option value="API">API</option>
        <option value="ALL">ALL</option>
    </select>
    <form>
        <select defaultValue={"DEFAULT"} onChange={e => sortTemps(e)} >
                <option value="DEFAULT" disabled>Filter by Temperaments</option>
                <option value="All">ALL</option>
                {allTemps && allTemps.map(e => {
                    return <option value={e.name} key={e.id}>{e.name}</option>
                })}
        </select>
    </form>
    </div>
  )
}


export default Orders
