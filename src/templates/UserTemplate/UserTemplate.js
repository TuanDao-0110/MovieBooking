import { Route } from "react-router-dom"


const UserTemplate = (props) => {
    const { Component, ...restRoute } = props // props = path, exact vs Component
  

    return (
        <Route {...restRoute} render={(propsRoute) => { // propsRoute = props.location, props.history,props.match ....  (propsRoute property is return from Route)
            return <>
                <div className="bg-white dark:bg-gray-900">
                    <div className="flex justify-center h-screen" >
                        <div className="hidden bg-cover bg-no-repeat lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://api.lorem.space/image/movie?w=1350&h=700' }}>
                            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                                <div>
                                    <h2 className="text-4xl font-bold text-white">MOVIE</h2>
                                    <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                           <Component {...propsRoute}></Component>
                        </div>
                    </div>
                </div>
                

            </>
        }}></Route>
    )

}


export default UserTemplate;