import React, {useRef, useEffect} from 'react'

const { tableau } = window;

function TableauDashboard(){

    const ref = useRef(null)

    const url = "https://public.tableau.com/views/CustomerTranscationDataAnalysis/CustomerTranscationDataAnalysis?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

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