import { useState } from 'react';

import TablePage from '@/components/ui/data-table';
import { Subject } from '@/types/subject.type';


import { registerSubjectTableColumn } from './registerSubjectTableColumn';
import { registeredSubjectTableColumn } from './registeredSubjectTableColumn';

const RegisterSubject = () => {
  const [registerSubjects, setRegisterSubject] = useState<Subject[]>([
    {
      name: 'Ian',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 1,
      regularCoefficient: 0.27,
      midTermCoefficient: 1.0,
      finalCoefficient: 0.06,
      description: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '11/16/2021',
      id: '⁦test⁧',
    },
    {
      name: 'Skye',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 4,
      regularCoefficient: 0.41,
      midTermCoefficient: 0.77,
      finalCoefficient: 0.21,
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '1/16/2020',
      id: '1/0',
    },
    {
      name: 'Bobbie',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 6,
      regularCoefficient: 0.73,
      midTermCoefficient: 0.24,
      finalCoefficient: 0.96,
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '8/11/2020',
      id: '1/0',
    },
    {
      name: 'Pat',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 5,
      regularCoefficient: 0.51,
      midTermCoefficient: 0.43,
      finalCoefficient: 0.25,
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '1/23/2020',
      id: "<img src=x onerror=alert('hi') />",
    },
    {
      name: 'Rafi',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 6,
      regularCoefficient: 0.36,
      midTermCoefficient: 0.01,
      finalCoefficient: 0.56,
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '8/28/2021',
      id: 'ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ ',
    },
    {
      name: 'Englebert',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 7,
      regularCoefficient: 0.14,
      midTermCoefficient: 0.46,
      finalCoefficient: 0.77,
      description:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '11/25/2021',
      id: '１２３',
    },
    {
      name: 'Pasquale',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 2,
      regularCoefficient: 0.56,
      midTermCoefficient: 0.81,
      finalCoefficient: 0.22,
      description:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '9/14/2022',
      id: '和製漢語',
    },
    {
      name: 'Wallace',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 9,
      regularCoefficient: 0.31,
      midTermCoefficient: 0.62,
      finalCoefficient: 0.72,
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '9/5/2022',
      id: '᠎',
    },
    {
      name: 'Julina',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 2,
      regularCoefficient: 0.86,
      midTermCoefficient: 0.89,
      finalCoefficient: 0.33,
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '12/29/2020',
      id: '部落格',
    },
    {
      name: 'Malvina',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 3,
      regularCoefficient: 0.61,
      midTermCoefficient: 0.7,
      finalCoefficient: 0.91,
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '11/23/2020',
      id: 'null',
    },
    {
      name: 'Malvina',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 3,
      regularCoefficient: 0.61,
      midTermCoefficient: 0.7,
      finalCoefficient: 0.91,
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '11/23/2020',
      id: 'null',
    },
  ]);

  const [registeredSubjects, setRegisteredSubject] = useState<Subject[]>([
    {
      name: 'Ian',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 1,
      regularCoefficient: 0.27,
      midTermCoefficient: 1.0,
      finalCoefficient: 0.06,
      description: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '11/16/2021',
      id: '⁦test⁧',
      
    },
    {
      name: 'Skye',
      code: "error: undefined method `first' for nil:NilClass",
      numberOfCredits: 4,
      regularCoefficient: 0.41,
      midTermCoefficient: 0.77,
      finalCoefficient: 0.21,
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      prerequisiteSubjects: "error: undefined method `first' for nil:NilClass",
      createdAt: '1/16/2020',
      id: '1/0',
    },
  ]);

  return (
    <>
      <TablePage<Subject> title="Môn đã đăng kí" data={registeredSubjects} columns={registeredSubjectTableColumn} />;
      <TablePage<Subject> title="Đăng kí học phần" data={registerSubjects} columns={registerSubjectTableColumn} />;
    </>
  );
};

export default RegisterSubject;