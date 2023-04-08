import React, { useRef } from 'react'
import { Input } from 'reactstrap';
import FullButton from '../button/FullButton'
import { baseURL } from '../../environment';

export default function MovieCreate(props) {

    const titleRef = useRef();
    const genreRef = useRef();
    const ratingRef = useRef();
    const lengthRef = useRef();
    const releaseYearRef = useRef();


    let ratings = [null, 'G', 'PG', 'PG-13', 'NC-17', 'R'];

    const yearRange = () => {
        //we need an array of a range

        // we need to figure THIS year

        // build our range

        // return our element

        let years = [null];
        const thisYear = new Date().getFullYear();

        for(let i =  thisYear; i >= 1892; i--);

        return(
            <>
            <Input type="select">
                {
                    years.map((year, index) =>{
                        return <option
                            key={index}
                            value={year}>
                                {year}
                        </option>
                    })
                }

            </Input>
            </>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('Clicked');

        const url = 'http://localhost:4000';

        const BodyObj = JSON.stringify({
            title: titleRef.current.value,
            genre: genreRef.current.value,
            rating: ratingRef.current.value,
            length: lengthRef.current.value,
            releaseYearRef: releaseYearRef.current.value
        });

        let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");
        myHeader.append('Authorization', props.token);

        const requestOptions = {
            headers: myHeader,
            body: BodyObj,
            method: 'POST'
        }

        try {
            const res = await fetch(url, requestOptions)
            const data = await res.json();
            console.log(data);
        } catch {
            console.error(err)
        }
    }
  return (
    <>
    <h1>Add Movie</h1>
    <Form onSubmit={handleSubmit}>
<FormGroup>
    <Label>Title</Label>
    <Input 
    innerRef={titleRef}
    autocomplete='off' />
</FormGroup>
<FormGroup>
    <Label>Genre</Label>
    <Input 
    innerRef={genreRef}
    type='select'
    autocomplete='off' />
    <option value={""}></option>
    <option value={"Comedy"}>Comedy</option>
    <option value={"Action"}>Action</option>
    <option value={"Horror"}>Horror</option>
    <option value={"Thriller"}>Thriller</option>
    <option value={"Family"}>Family</option>
    <option value={"Documentary"}>Documentary</option>
    <Input/>
</FormGroup>
<FormGroup>
    <Label>Rating</Label>
    <Input 
    innerRef={ratingRef}
    type='select'
    autocomplete='off'>
        {
        ratings.map((r, i) => (
            <option key={i}></option>
        ))
        }
    </Input>
</FormGroup>
<FormGroup>
    <Label>Length</Label>
    <Input 
    innerRef={lengthRef}
    autocomplete='off' />
</FormGroup>
<FormGroup>
    <Label 
    innerRef={releaseYearRef}
    >Year Released</Label>
    {yearRange()}
</FormGroup>
<FullButton>
    <Button color="success" >Add Movie</Button>
</FullButton>
    </Form>
    </>
  )
}
