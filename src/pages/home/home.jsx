import Chart from '../../components/chart/chart'
import FeaturedInfo from '../../components/featureInfo/FeaturedInfo'
import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

import  './home.css'
export default function home() {
  return (
    <div className='home'>
      <FeaturedInfo/> 
      <Chart data={userData} title="Active User" />
      <div className="homewidget">
        <WidgetSm/>
        <WidgetLg/>
       
      </div>
    </div>
  )
}
