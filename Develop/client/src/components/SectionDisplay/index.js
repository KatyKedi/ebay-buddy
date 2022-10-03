// function SectionDisplay() {
//     const [state, dispatch] = useGlobalContext();
    
//       return (
//         <>
//           <Container className='my-4 h-100'>
//             <Row>
//               <Col>
//                 <h2 className='text-center'>All Sections</h2>
//                 <ul className='text-left list-unstyled'>
//                   {filteredItems.map(item => (
//                     <li
//                       onClick={(event) => handleItemClick(event)}
//                       id={item._id}
//                       className='my-2 p-1 border border-warning rounded bg-gradient'>
//                       {item.name}
//                     </li>))}
//                 </ul>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <Button
//                   variant="outline-primary"
//                   onClick={(event) => handleViewClick(event)}
//                 >View | Edit</Button>
//               </Col>
//               <Col>
//                 <Button
//                   variant="outline-danger"
//                   onClick={(event) => handleDeleteClick(event)}
//                 >Delete</Button>
//               </Col>
//             </Row>
//           </Container>
//         </>
//       )
//     }
  
//   export default ItemDisplay;