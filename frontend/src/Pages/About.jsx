const people = [
    {
        name: 'A Sai Bharath',
        title: 'Back-end Development',
        department: 'Computer Science and Engineering',
        email: 'asb.bharath601@gmail.com',
        role: 'Developer',
        college: 'Keshav Memorial Engineering College',
    },
    {
        name: 'Chakradhar',
        title: 'Front-end Development',
        department: 'Computer Science and Engineering',
        email: 'ytschakradhar@gmail.com',
        role: 'Developer',
        college: 'Keshav Memorial Engineering College',
    },
    {
        name: 'Vajradhar',
        title: 'Front-end Development',
        department: 'Computer Science and Engineering',
        email: 'vajradhar13@gmail.com',
        role: 'Developer',
        college: 'Keshav Memorial Engineering College',
    },
    {
        name: 'R Rupak Babu',
        title: 'Front-end Development',
        department: 'Computer Science and Engineering',
        email: 'rupakr31@gmail.com',
        role: 'Developer',
        college: 'Keshav Memorial Engineering College',
    },
    {
        name: 'Jaini Sai Abhiram',
        title: 'Back-end Development',
        department: 'Computer Science and Engineering',
        email: 'abhiramjaini28@gmail.com',
        role: 'Developer',
        college: 'Keshav Memorial Engineering College',
    },
];
// ... (previous imports and code)

function TableOne() {
    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Team</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of members who have participated in the hackathon as a team.
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                <span>Participants</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-8 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-8 py-3.5 text-left text-sm font-normal text-gray-700">
                                                Department
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                                College
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {people.map((person) => (
                                            <tr key={person.name}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {person.name}
                                                            </div>
                                                            <div className="text-sm text-gray-700">
                                                                {person.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-8 py-4">
                                                    <div className="text-sm text-gray-900 ">
                                                        {person.title}
                                                    </div>
                                                    <div className="text-sm text-gray-700">
                                                        {person.role}
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-8 py-4 text-sm text-gray-700">
                                                    {person.department}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                    {person.college}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TableOne;