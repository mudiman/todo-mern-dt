import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Checkbox, Divider, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import TextArea from 'antd/lib/input/TextArea';
import Layout, { Content } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { Todo } from '../model/Todo';
import { useStore } from '../store/todoStore';


const style = {
    checkbox: {

    },
    input: {
        padding: '0px 7px',
    }
};

const TodoItem = ({ id, body, completed }: Todo) => {
    const { removeTodo, updateTodo } = useStore();
    const [checked, setChecked] = useState(completed);
    const [task, setTask] = useState(body);

    const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTask(e.target.value)
    };

    const onChange = (e: CheckboxChangeEvent) => {
        setChecked(e.target.checked)
    };
    return (
        <Layout>
            <Content>
                <Row gutter={16}>
                    <Checkbox style={style.checkbox} onChange={onChange}></Checkbox>
                    <p style={style.input}>
                        <TextArea rows={4}  value={task}  onChange={onChangeBody} />
                        <EditOutlined onClick={() => updateTodo(id, task, checked)} />
                        <DeleteOutlined onClick={() => removeTodo(id)} />
                    </p>
                    <Divider orientation="left"></Divider>
                </Row>
            </Content>
        </Layout>
    );
}

export default TodoItem;