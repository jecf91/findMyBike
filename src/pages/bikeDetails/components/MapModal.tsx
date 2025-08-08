import { Modal, Box, type ModalProps } from '@mui/material';
import type { LatLngTuple } from 'leaflet';
import { MapComponent } from '@/components';

interface MapModalProps extends Pick<ModalProps, 'open' | 'onClose'> {
  stolenCoordinates: LatLngTuple;
}

export const MapModal = ({
  open,
  onClose,
  stolenCoordinates,
}: MapModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 500, md: 600 },
          height: { xs: 300, sm: 400 },
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          overflow: 'hidden',
        }}
      >
        <MapComponent position={stolenCoordinates} />
      </Box>
    </Modal>
  );
};
