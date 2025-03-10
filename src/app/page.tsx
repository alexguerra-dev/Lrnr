export default function Home() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Hello, World!</h1>

            <div className="mb-4">
                <p>
                    I am going to learn typescript. Got to think of a good
                    project. A todo list is pretty classic.
                </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">Player Info</h2>
                <p>Player: Alex</p>
                <p>HP: 100</p>
                <p>MP: 50</p>
                <p>Weapon: Sword</p>
                <p>Armor: Leather</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">Actions</h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Attack
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Defend
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    Use Item
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Monsters</h2>
                <p>Slime</p>
                <p>HP: 10</p>
            </div>
        </div>
    )
}
