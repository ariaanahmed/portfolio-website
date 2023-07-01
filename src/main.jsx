import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'aos/dist/aos.css';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto shadow-lg'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
