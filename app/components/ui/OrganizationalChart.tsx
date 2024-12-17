
'use client';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';

const data = [
  {
    id: 'College Council',
    label: 'College Council',
    children: [
      {
        id: 'president',
        label: 'President',
        children: [
            {
                label: 'Department of English',
                id: 'dep-english',
                children: [{
                    id: 'head',
                    label: 'Head',
                    children: [{
                        id: 'faculty',
                        label: 'Faculty'
                      }]
                  },
                 
                  ]
                
            },
            {
                id: 'dep-social-science',
                label: 'Department of Social Science',
                children: [{
                    id: 'head',
                    label: 'Head',
                    children: [ {
                        id: 'faculty',
                        label: 'Faculty'
                      },]
                  },
                 
                  ]
            },
            {
                id: 'dep-dai-studies',
                label: 'Department of Dai Studies',
                children: [{
                    id: 'head',
                    label: 'Head',
                    children: [ {
                        id: 'faculty',
                        label: 'Faculty'
                      },]
                  },
                 
                  ]
            },
            {
                id: 'dep-of-it',
                label: 'Department of IT',
                children: [{
                    id: 'head',
                    label: 'Head',
                    children: [ {
                        id: 'faculty',
                        label: 'Faculty'
                      },]
                  },
                 
                  ]
            },
            {
                id: 'registration-office',
                label: "Registration Office",
                children: [{
                    id: 'director',
                    label: 'Director',
                    children: [ {
                        id: 'Admission',
                        label: 'Admission'
                      }]
                  },
                 
                  ]
            },
            {
                id: "finance",
                label: "Finance"
            }
        ],
      },
      {
        id: 'chairman',
        label: 'Chairman',
        children: [
            {
                id: 'council-member',
                label: 'Council Member',
                children: [
                    {
                    id: ' Dr. Sai San Aik',
                    label: 'Dr. Sai San Aik'
                }, {
                    id: 'Sai Fang',
                    label: 'Sai Fang'
                }, {
                    id: 'Sai Phong Khong',
                    label: 'Sai Phong Khong'
                }, {
                    id: ' Nang Hla Yen',
                    label: 'Nang Hla Yen'
                }, {
                    id: 'Nang Hseng',
                    label: "Nang Hseng"
                }, {
                    id: "Sao Lao Korn",
                    label: "Sao Lao Korn"
                }, {
                    id: "Sao Kai Fa",
                    label: "Sao Kai Fa"
                }]
          },
          {
            id: 'dr-sai-oo',
            label: 'Dr. Sai Oo',
            
          },
        
        ],
      },
    
    ],
  },
];

const ExampleTree = () => {


    const StyledNode = styled.div`
  padding: 5px 10px;
  border-radius: 8px;
  color: #fff;
  display: inline-block;
  border: 1px solid blue;
  background: blue;
`;

    return (
        <div className='py-20 w-full'>
          <Tree
            lineWidth={'2px'}
            lineColor={'blue'}
            lineBorderRadius={'10px'}
            label={<StyledNode>SCC</StyledNode>}
          >
            {data.map((node) => {
               
                return  <TreeNode key={node.id} label={<StyledNode>{node.label}</StyledNode>}>
                {node.children && node.children.map((child) => (
                  <TreeNode key={child.id} label={<StyledNode>{child.label}</StyledNode>}>
                    {child.children && child.children.map((grandChild: { id: string; label: string; children?: { id: string; label: string; }[] }) => (
                      <TreeNode key={grandChild.id} label={<StyledNode>{grandChild.label}</StyledNode>}>
                        {grandChild.children && grandChild.children.map((greatGrandChild:  { id: string; label: string; children?: { id: string; label: string; }[] }) => (
                          <TreeNode key={greatGrandChild.id} label={<StyledNode>{greatGrandChild.label}</StyledNode>}>
                            {greatGrandChild.children && greatGrandChild.children.map((greatGreatGrandChild:  { id: string; label: string; children?: { id: string; label: string; }[] }) => (
                              <TreeNode key={greatGreatGrandChild.id} label={<StyledNode>{greatGreatGrandChild.label}</StyledNode>} />
                            ))}
                          </TreeNode>
                        ))}
                      </TreeNode>
                    ))}
                  </TreeNode>
                ))}
              </TreeNode>
            })}
          </Tree>
        </div>
      )
};
export default ExampleTree