import React from 'react';

export const NewComponent = () => {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    const topCarsTr = topCars
        .map((c,index) => <tr>
            <td>{index+1}</td>
            <td>{c.manufacturer}</td>
            <td>{c.model}</td>
        </tr>)

    return (
        <table>
            {topCarsTr}
        </table>
    );
}
