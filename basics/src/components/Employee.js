
function Employee(props){ // Note: each componrnt starts with an uppercase letter
    //else it will not work
return (
<div>
    <img 
    class="block mx-auto h-24 rounded-full sm:shrink-0"
    src="/img/origin-lindford.jpg"
    alt="Woman's face" />
    <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">{props.name}</p>
            <p class="text-state-500 font-medium">{props.role}</p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border">
            message
        </button>

    </div>
</div>
);
}

export default Employee; 