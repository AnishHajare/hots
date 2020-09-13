import { useEffect } from "react";
import axios from 'axios';

export default function getQuestions(pageNumber) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow',
            params: {page: pageNumber}
        }).then(res => {
            console.log(res.data)
        })
    }, [pageNumber])
    return null


}

