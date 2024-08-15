const itemGroup = item
  ? item.mark.marktype === 'group'  // Check if item exists and if its marktype is 'group'
    ? item  // If true, assign item to itemGroup
    : item.mark.group  // If false, assign item.mark.group to itemGroup
  : null;  // If item does not exist, assign null to itemGroup
