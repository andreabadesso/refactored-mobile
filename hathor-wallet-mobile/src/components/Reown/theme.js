import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/themes';

export const commonStyles = StyleSheet.create({
  // Card
  card: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: COLORS.card,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 4,
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
  },
  cardSplit: {
    flexDirection: 'row',
    gap: 16,
  },
  cardSplitIcon: {
    flexShrink: 1,
    alignSelf: 'flex-start',
  },
  cardSplitContent: {
    maxWidth: '80%',
    flexDirection: 'column',
    gap: 8,
  },
  cardSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.borderColor
  },
  cardStack: {
    flexDirection: 'column',
  },
  cardStackItem: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  listItem: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  feedbackItem: {
    paddingHorizontal: 16,
  },

  // General
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textColor,
  },
  bold: {
    fontWeight: 'bold',
  },
  field: {
    color: COLORS.muted,
  },
  mb4: {
    marginBottom: 4,
  },
  mt8: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: COLORS.textColor,
    marginBottom: 24,
  },
  // Modal styles
  body: {
    paddingBottom: 24,
  },
  selectionContainer: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.secondary,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.textColor,
  },
});
