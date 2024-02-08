// import { GetServerSideProps } from 'next';
// import {
//     GetMinetrucksDocument,
//     GetMinetrucksQuery,
//     Minetruck,
// } from './interface';
// import { initializeApollo } from './apolloClient';

// interface MinetrucksProps {
//     minetrucks: GetMinetrucksQuery['minetrucks'];
// }

// interface TableRowProps {
//     minetruck: Minetruck;
// }

// const TableRow = ({ minetruck }: TableRowProps) => {
//     return (
//         <tr>
//             <td>{minetruck.name}</td>
//             <td>{minetruck.tonnage}</td>
//             <td>{minetruck.make}</td>
//         </tr>
//     );
// };

// function Minetrucks({ minetrucks }: MinetrucksProps) {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Tonnage</th>
//                     <th>Make</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {minetrucks?.edges.map(({ node }) => (
//                     <TableRow key={node.uuid} minetruck={node} />
//                 ))}
//             </tbody>
//         </table>
//     );
// }

// export const getServerSideProps: GetServerSideProps<
//     MinetrucksProps
// > = async () => {
//     const apolloClient = initializeApollo();

//     const { data } = await apolloClient.query({
//         query: GetMinetrucksDocument,
//     });
//     console.log('asdad', data);
//     return {
//         props: {
//             initialApolloState: apolloClient.cache.extract(),
//             minetrucks: data.minetrucks,
//         },
//     };
// };

// export default Minetrucks;
