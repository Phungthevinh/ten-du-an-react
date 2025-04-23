import Home from "../pages/Home"
import Dangky from "../pages/Dangky"
import Layoutmacdinh from "../components/Layouts/Layoutmacdinh"
export const routes = [
    {
        path: '/', component: Home, layout: Layoutmacdinh
    },
    {
        path: '/dang-ky', component: Dangky, layout: Layoutmacdinh
    }
]