import React, {useRef, useEffect} from 'react'

const { tableau } = window;

function TableauDashboard(){

    const ref = useRef(null)

    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";


    function initViz() {
        new tableau.Viz(ref.current, url)
    }

    useEffect (()=> {
        initViz();
    }, [])

    return (
    <div>
        <p> This is my tableau dashboard</p>
        <div ref={ref}></div>
    </div>
    );

}

export default TableauDashboard;