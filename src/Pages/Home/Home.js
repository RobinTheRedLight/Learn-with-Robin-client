import React from 'react';

const Home = () => {
    return (
        <div className='p-8'>
            <h1 className='font-mono text-center font-bold text-4xl text-green-300'>Details:</h1>

            <h3 className='pt-3 font-serif text-red-300 text-xl font-bold'>Structured programming:
                <span className=' text-slate-50 font-sans text-lg font-semibold'>Structured programming is a programming paradigm aimed at improving the clarity, quality, and development time of a computer program by making extensive use of the structured control flow constructs of selection and repetition, block structures, and subroutines.
                </span>
            </h3>

            <h3 className='pt-3 font-serif text-red-300 text-xl font-bold'>Object-oriented programming:
                <span className=' text-slate-50 font-sans text-lg font-semibold'>Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures. A common feature of objects is that procedures are attached to them and can access and modify the object's data fields.
                </span>
            </h3>

            <h3 className='pt-3 font-serif text-red-300 text-xl font-bold'>Scripting language:
                <span className=' text-slate-50 font-sans text-lg font-semibold'>
                    A scripting language's primitives are usually elementary tasks or API calls, and the scripting language allows them to be combined into more programs. Environments that can be automated through scripting include application software, text editors, web pages, operating system shells, embedded systems.
                </span>
            </h3>

        </div>
    );
};

export default Home;