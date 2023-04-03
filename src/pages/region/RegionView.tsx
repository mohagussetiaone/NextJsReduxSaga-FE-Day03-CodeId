import React, { useEffect, useState } from 'react'
import Region from '../api/Region'
import RegionCreate from './RegionCreate'
import RegionUpdate from './RegionUpdate'
export default function RegionView() {
    const [region, setRegion] = useState<any[]>([])
    const [refrash, setRefrash] = useState<any>(false)
    const [display, setDisplay] = useState<any>(false)
    const [displayEdit, setDisplayEdit] = useState<any>(false)
    const [id, setId] = useState<any>()
    useEffect(() => {
        Region.GetData().then
            (data => {
                setRegion(data)
            })
    }, [refrash])

    const onClick = (id: any) => {
        setDisplayEdit(true)
        setId(id)
    }

    return (
        <div>
            {displayEdit ?
                <RegionUpdate
                    setRefrash={setRefrash}
                    setDisplay={setDisplayEdit}
                    id={id} /> :
                display ? <RegionCreate
                    setRefrash={setRefrash}
                    setDisplay={setDisplay} /> :
                    <>
                        <button onClick={() => setDisplay(true)}>Add Region</button>
                        <h2>List Region</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Region ID</th>
                                    <th>Region Name</th>
                                    <th>Region Photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    region && region.map(reg => (
                                        <tr key={reg.regionId}>
                                            <th>{reg.regionId}</th>
                                            <th>{reg.regionName}</th>
                                            <th>{reg.regionPhoto}</th>
                                            <th>
                                                <button onClick={() => onClick(reg.regionId)}>Edit</button>
                                            </th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
            }
        </div>
    )
}
