<header class="h-15v bg-header flex flex-row
 justify-between p-5 items-center">
    <img class="h-2/3" src="{{asset("images/logo.png")}}" alt="logo">
    <h1 class="text-black uppercase text-6xl">Gestión Laravel</h1>
    @guest
        <div class="space-x-4">
            <a href="login" class = "text-black btn glass">Login</a>
            <a  href ="register" class = "btn glass text-black">Register</a>
        </div>
    @endguest
    @auth
        <div class="space-x-4">
            <h2 class=" text-black text-2xl">{{auth()->user()->name}}</h2>
            <form action="logout" method="POST">
                @csrf
                <button class=" btn glass text-black" type="submit">Logout</button>
            </form>

        </div>

    @endauth



</header>
