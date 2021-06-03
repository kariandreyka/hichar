import { Typography } from 'antd';
import styled, { css } from 'styled-components';
import { FontTheme } from './constants';

const { Text: StyledText, Title: StyledTitle, Paragraph: StyledParagraph } = Typography;
const { Family, Color, Weight, Size } = FontTheme;

const CommonStyling = css`
    &&& {
        font-family: ${({ family }) => {
            if (!family) return Family.primary;

            switch (family) {
                case 'primary':
                    return Family.primary;
                case 'secondary':
                    return Family.secondary;
                default:
                    return family;
            }
        }};

        font-weight: ${({ weight }) => {
            if (!weight) return Weight.regular;

            switch (weight) {
                case 'light':
                    return Weight.light;
                case 'regular':
                    return Weight.regular;
                case 'semiBold':
                    return Weight.semiBold;
                case 'medium':
                    return Weight.medium;
                case 'bold':
                    return Weight.bold;
                case 'extraBold':
                    return Weight.extraBold;

                default:
                    return weight;
            }
        }};

        color: ${({ color }) => {
            if (!color) return Color.white;

            switch (color) {
                case 'smoke':
                    return Color.smoke;
                case 'grey':
                    return Color.grey;
                case 'darkBlack':
                    return Color.darkBlack;
                case 'white':
                    return Color.white;
                case 'lightGrayishBlue':
                    return Color.lightGrayishBlue;
                case 'lightPink':
                    return Color.lightPink;

                default:
                    return color;
            }
        }};
        font-size: ${({ size }) => {
            if (!size) return Size.regular;

            switch (size) {
                case 'tiny':
                    return Size.tiny;
                case 'regular':
                    return Size.regular;
                case 'description':
                    return Size.description;
                case 'title':
                    return Size.title;
                case 'bigTitle':
                    return Size.bigTitle;

                default:
                    return size;
            }
        }};
    }
`;

export const Tittle = styled(StyledTitle)`
    ${CommonStyling}
`;

export const Paragraph = styled(StyledParagraph)`
    ${CommonStyling}
`;
export const Text = styled(StyledText)`
    ${CommonStyling}
`;
