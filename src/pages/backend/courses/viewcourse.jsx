import React, { useEffect, useState } from 'react'
import Header from "../../../component/heback"
import Sidebar from '../sidebar'
import Tables from '../../../component/tables'
import axios from 'axios'
import Swal from 'sweetalert2'


const viewcourse = () => {

    let classes = localStorage.getItem('class_name');
    let subject = localStorage.getItem('subject');
    let subject_id = localStorage.getItem('subject_id');
    const [course, setCourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/ReactProject/api/api-fetch-course.php`).then(res => {
            setCourse(res.data);
            console.log(res);
        });
    }, []);


    const coursedelete = (e, course_id) => {
        const click = e.currentTarget;
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`http://localhost/ReactProject/api/api-course-delete.php?id=${course_id}`).then(res => {
                    Swal.fire(
                        'Success!',
                        '',
                        'success'
                    )
                    click.closest("tr").remove();
                    console.log(res);

                })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <><Header />
            <div className="container d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>


                <div className="col-md-9">

                        <Tables
                            // For Th

                            t1="কোর্সের নাম"
                            t2="কোর্সের ফী"
                            t3="কোর্সের চলমান সময়"
                            t4="শ্রেনি"
                            t5="কোর্সের সাবজেক্ট"
                            t10="Action"

                            // for map function
                            name={course}

                            // for map TD
                            n1={"coursename"}
                            n2={"coursefee"}
                            n3={"courseduretion"}
                            n4={"class_name"}
                            n5={"sub_name"}


                            con={1}
                            // for image
                            path={'images'}
                            imageName={`courseimg`}

                            // for link and passing id edit option
                            link={"editstudent"}
                            id={"course_id"}

                            dlt={coursedelete}


                        />
               
                
                </div>


                
            </div>
            <div className="col-md-9">
                        <Tables
                            // For Th

                            t1="কোর্সের নাম"
                            t2="কোর্সের ফী"
                            t3="কোর্সের চলমান সময়"
                            t4="শ্রেনি"
                            t5="কোর্সের সাবজেক্ট"
                            t10="Action"

                            // for map function
                            name={course}


                            // for map TD
                            n1={"coursename"}
                            n2={"coursefee"}
                            n3={"courseduretion"}
                            n4={"class_name"}
                            n5={"sub_name"}


                            con={1}
                            // for image
                            path={'images'}
                            imageName={`courseimg`}

                            // for link and passing id edit option
                            link={"editstudent"}
                            id={"course_id"}

                            dlt={coursedelete}


                        />
               
                    
                </div>
            </>
    )
}

export default viewcourse