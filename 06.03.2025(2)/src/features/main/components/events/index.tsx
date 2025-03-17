import Section from "@/features/shared/section"
import Event from "./event"

export default function Events() {
  return (
    <div id="event" className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 lg:col-span-1">
            <Event title="How we cooking" imagePath="/images/popular.jpg" />
          </div>
          <div className="col-span-1 lg:col-span-1">
            <Event title="Our blog" imagePath="/images/pizza-cut.jpg" />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col items-end justify-end py-4">
            <Section head="Event" />
            <p className="text-info px-2 text-right">
              There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-1">
            <Event title="Two pizza for 1 price" imagePath="/images/give-away.jpg" />
          </div>
          <div className="col-span-1">
            <Event title="Kitchen tour" imagePath="/images/kitchen.jpg" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div className="col-span-1">
            <Event title="Free coffee for 3 pizza" imagePath="/images/free-coffee.jpg" />
          </div>
          <div className="col-span-1">
            <Event title="Our instagram" imagePath="/images/instagram.jpg" />
          </div>
          <div className="col-span-1">
            <Event title="Where are you choose us?" imagePath="/images/choose-us.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}

