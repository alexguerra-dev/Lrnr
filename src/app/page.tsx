import Image from 'next/image'

export default function Home() {
    return (
        <div className="p-4">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">Heroes</h2>
                <div className="flex space-x-4">
                    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <p className="font-bold">Alex</p>
                        <Image
                            src="/glider.png"
                            alt="Alex"
                            width={100}
                            height={100}
                        />
                        <p>HP: 100</p>
                        <p>MP: 50</p>
                        <p>Weapon: Sword</p>
                        <p>Armor: Leather</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <p className="font-bold">Jordan</p>
                        <Image
                            src="/ranger.png"
                            alt="Jordan"
                            width={100}
                            height={100}
                        ></Image>
                        <p>HP: 100</p>
                        <p>MP: 50</p>
                        <p>Weapon: Sword</p>
                        <p>Armor: Leather</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <p className="font-bold">Gabe</p>
                        <p>HP: 100</p>
                        <p>MP: 50</p>
                        <p>Weapon: Sword</p>
                        <p>Armor: Leather</p>
                    </div>
                </div>
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
