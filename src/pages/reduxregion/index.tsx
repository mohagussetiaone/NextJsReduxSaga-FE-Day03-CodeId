import React, { useEffect, useState } from 'react'
import Region from '../../api/Region'
import Layout from '@/component/layout'
import { useDispatch, useSelector } from 'react-redux'
import { GetRegionRequest } from '../../redux-saga/action/regionAction'
import FormikRegionCreate from './RegionFormikCreate'
export default function RegionRedux() {
    const dispatch = useDispatch()
    const [display, setDisplay] = useState<any>(false)
    const [refrash, setRefrash] = useState<any>(false)
    const { regions } = useSelector((state: any) => state.regionState)
    useEffect(() => {
        dispatch(GetRegionRequest())
    }, [refrash])
    return (
        <div>
            <Layout>

                <>
                    {display ? <FormikRegionCreate 
                    setRefrash = {setRefrash}
                    setDisplay = {setDisplay}/> :
                        <>
                            <h2>List Region</h2>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setDisplay(true)}> Add Region </button>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                Region ID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Region Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                Region Photo
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {regions && regions.map((item: any) => {
                                            return (
                                                <>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                            {item.regionId}
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {item.regionName}
                                                        </td>
                                                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                                            {item.regionPhoto}
                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </>
                    }

                </>
            </Layout>
        </div>
    )
}
