import {Button} from './Button';

export const Appbar = () => {
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            Gambling App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
            <Button label={'signin'} onClick={() => {window.location.href="/signin"}} />
            </div>
        </div>
    </div>
}