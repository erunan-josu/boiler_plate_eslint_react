import TkButton from "../components/TkButton/TkButton"

export default {
    title: 'Default Buttons',
    component: TkButton,
    argTypes: { handleClick: { action: 'On Button Click' } }
}

const Template = (args) => <TkButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Save',
    type: 'primary',
    size: 'lg'
}